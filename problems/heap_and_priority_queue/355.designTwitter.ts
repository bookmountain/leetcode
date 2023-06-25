class Twitter {
    private tweets: Map<number, Tweet[]>;
    private followers: Map<number, Set<number>>;
    constructor() {
        this.tweets = new Map();
        this.followers = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId)!.push(new Tweet(tweetId));
    }

    getNewsFeed(userId: number): number[] {
        const newsFeed: number[] = [];
        const tweetsHeap: Tweet[] = [];
        // Add user's own tweets to the news feed
        if (this.tweets.has(userId)) {
            for (const tweet of this.tweets.get(userId)!) {
                tweetsHeap.push(tweet);
            }
        }
        // Add followers' tweets to the news feed
        if (this.followers.has(userId)) {
            for (const follwerId of this.followers.get(userId)!) {
                if (this.tweets.has(follwerId)) {
                    for (const tweet of this.tweets.get(follwerId)!) {
                        tweetsHeap.push(tweet);
                    }
                }
            }
        }

        const maxHeapify = (index: number): void => {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            let maxIndex = index;

            if (leftChild < tweetsHeap.length && tweetsHeap[leftChild].timestamp > tweetsHeap[maxIndex].timestamp) {
                maxIndex = leftChild;
            }
            if (rightChild < tweetsHeap.length && tweetsHeap[rightChild].timestamp > tweetsHeap[maxIndex].timestamp) {
                maxIndex = rightChild;
            }
            if (maxIndex !== index) {
                const temp = tweetsHeap[maxIndex];
                tweetsHeap[maxIndex] = tweetsHeap[index];
                tweetsHeap[index] = temp;
                maxHeapify(maxIndex);
            }
        };

        for (let i = Math.floor(tweetsHeap.length / 2) - 1; i >= 0; i--) {
            maxHeapify(i);
        }

        const numTweets = Math.min(10, tweetsHeap.length);
        for (let i = 0; i < numTweets; i++) {
            newsFeed.push(tweetsHeap[0].id);
            const temp = tweetsHeap[tweetsHeap.length - 1];
            tweetsHeap[tweetsHeap.length - 1] = tweetsHeap[0];
            tweetsHeap[0] = temp;
            tweetsHeap.pop();
            maxHeapify(0);
        }

        return newsFeed;
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followers.has(followerId)) {
            this.followers.set(followerId, new Set());
        }
        this.followers.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followers.has(followerId)) {
            this.followers.get(followerId)!.delete(followeeId);
        }
    }
}

class Tweet {
    id: number;
    timestamp: number;

    constructor(id: number) {
        this.id = id;
        this.timestamp = Date.now();
    }
}
