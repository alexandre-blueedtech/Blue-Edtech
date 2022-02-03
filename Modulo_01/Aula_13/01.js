const pessoa = {
    nome: 'Daniel',
    idade: 26,
    peso: 67,
    altura: 1.7,
    envelhecer: function() {
        if(this.idade < 21) this.altura += 0.005;
        this.idade++;        
    },
    engordar: function() {
        this.peso++;
    },
    emagrecer: function() {
        this.peso--;
    }
}