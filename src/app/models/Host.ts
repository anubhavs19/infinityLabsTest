export class HostData {
    hostName: String;
    loopback: String;
    interfaces: Array<any>;

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

    getInterfaces(){
        return this.interfaces;
    }

    setInterfaces(interfaces) {
        this.interfaces = interfaces;
    }
}