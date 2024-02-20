var nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

function injectCode(src) {
    const script = document.createElement('script');
    // This is why it works!
    script.src = src;
    script.onload = function() {
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}

setTimeout(injectCode(chrome.runtime.getURL('/ballExp.js')), 100);
setTimeout(injectCode(chrome.runtime.getURL('/ballUpgrade.js')), 100);
setTimeout(injectCode(chrome.runtime.getURL('/ballReset.js')), 100);
setTimeout(injectCode(chrome.runtime.getURL('/ballManager.js')), 200);
setTimeout(injectCode(chrome.runtime.getURL('/content_script1.js')), 300);