export default {
    state: {
        recentCard: null,
        totalPairs: require.context('../../public/images/', true, /\.jpg$/).keys().length,
        pairsFound: 0,
        mismatches: 0,
    },
    mutations: {
        setRecentCard(state, mostRecent){
            state.recentCard = mostRecent;
        },
        increasePairsFound(state){
            state.pairsFound++;
        },
        increaseMismatches(state){
            state.mismatches++;
        }
    }
}
