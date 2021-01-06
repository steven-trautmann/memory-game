export default {
    state: {
        recentCard: "",
        totalPairs: require.context('../../public/images/', true, /\.jpg$/).keys().length,
        pairsFound: 0
    },
    mutations: {
        setRecentCard(mostRecent){
            this.recentCard = mostRecent;
        },
        increasePairsFound(){
            this.pairsFound++;
        }
    }
}
