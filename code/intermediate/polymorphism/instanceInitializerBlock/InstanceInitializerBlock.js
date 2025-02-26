class InstanceInitializerBlock {
    static name;
    static {
        this.name ="Avonash";
        console.log('block called');
    }
    constructor() {
        console.log('Constructor block called');
    }
}

console.log(InstanceInitializerBlock.name);