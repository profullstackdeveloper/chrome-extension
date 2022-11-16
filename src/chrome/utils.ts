export const getCurrentTabUrl = (): void => {
    const queryInfo = {
        active: true,
        lastFocusedWindow: true
    };

    console.log("called!");

    chrome.tabs && chrome.tabs.query(queryInfo, (tabs: any) => {
        console.log(tabs);
    })
}