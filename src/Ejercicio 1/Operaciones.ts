class suma {
    constructor(private a: number, private b: number) {}
    public calcular(): number {
        return this.a + this.b;
    }
}
class resta{
    constructor(private a: number, private b: number) {}
    public calcular(): number {
        return this.a - this.b;
    }
}
class multiplicacion{
    constructor(private a: number, private b: number) {}
    public calcular(): number {
        return this.a * this.b;
    }
}
class division{
    constructor(private a: number, private b: number) {}
    public calcular(): number {
        if(this.b === 0){
            throw new Error("División por cero no permitida.");
        }
        return this.a / this.b;
    }
}