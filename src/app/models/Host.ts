export class HostData {
    hostName: String;
    loopback: String;

    constructor(hostName: String, loopback: String) {
        this.hostName = hostName;
        this.loopback = loopback;
    }

    getLoopBack() {
        return this.loopback;
    }

    setLoopback(loopBack: String) {
        this.loopback = loopBack;
    }

    getHostName() {
        return this.hostName;
    }

    setHostName(hostName) {
        this.hostName = hostName;
    }
}