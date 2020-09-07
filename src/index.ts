
export async function myGcfTest(request: any, response: any) {
    response.status(200).send('Hello Cloud Function!')
}

export async function myActionTest() {
    console.log('Hello Action!')
}
