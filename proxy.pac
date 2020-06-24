function FindProxyForURL(url, host) {
    const matchCurrentHost = entry => shExpMatch(host, entry);
    return proxyHosts.some(matchCurrentHost) ? "SOCKS5 127.0.0.1:9998" : "DIRECT";
}

const proxyHosts = [
    "ct.uio.no",
    "link.springer.com",
];
