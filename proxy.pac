
function FindProxyForUrl(url, host) {
    const matchCurrentHost = entry => shExpMatch(host, entry);
    return proxyHosts.some(matchCurrentHost) ? "SOCKS5 127.0.0.1:9998" : "DIRECT";
}

const proxyHosts = [
    "link.springer.com",
];
