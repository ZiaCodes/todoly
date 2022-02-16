if('IdleDetector' in window){

    async function runIdleDetection(){
        const state = await IdleDetector.requestPermission();
        console.log(state);

        const IdleDetector = new IdleDetector();

        IdleDetector.addEventListener('change',()=>{
            const { userState, screenState } = IdleDetector;
            if(userState == 'idle'){
                //update database.
            }
        })

        await IdleDetector.start({
            thresold: 120000,
        })
    }
}