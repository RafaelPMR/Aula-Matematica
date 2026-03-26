class ProgressaoGeo:
    def __init__(self, primeiroTermo, razao):
        self.primeiroTermo = primeiroTermo
        self.razao = razao

    def calcular_termo(self, n):
        if self.razao == 0: raise ValueError("Razão não pode ser zero")
        return self.primeiroTermo * (self.razao ** (n - 1))

    def calcular_soma(self, n):
        if self.razao == 1:
            return self.primeiroTermo * n
        return self.primeiroTermo * (self.razao ** n - 1) / (self.razao - 1)

    def exibir(self, n):
        for i in range(1, n + 1):
            print(self.calcular_termo(i))

pg = ProgressaoGeo(2,3)
pg.exibir(5)

