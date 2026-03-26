class ProgressaoGeometrica:
    def __init__(self, primeiro_termo: float, razao: float):
        self.primeiro_termo = primeiro_termo
        self.razao = razao

    def termo(self, n: int) -> float:
        if n <= 0:
            raise ValueError("n deve ser maior que 0")
        return self.primeiro_termo * (self.razao ** (n - 1))

    def gerar_termos(self, quantidade: int) -> list:
        if quantidade <= 0:
            return []

        termos = []
        atual = self.primeiro_termo

        for _ in range(quantidade):
            termos.append(atual)
            atual *= self.razao

        return termos


# 🔹 Entrada de dados do usuário
primeiro_termo = float(input("Digite o primeiro termo da PG: "))
razao = float(input("Digite a razão da PG: "))
quantidade = int(input("Quantos termos deseja gerar? "))

# 🔹 Criando objeto
pg = ProgressaoGeometrica(primeiro_termo, razao)

# 🔹 Gerando termos
termos = pg.gerar_termos(quantidade)

# 🔹 Mostrando resultado
print("\nProgressão Geométrica:")
print(termos)

# 🔹 Extra: mostrando um termo específico
n = int(input("\nDigite qual termo você quer calcular: "))
print(f"{n}º termo:", pg.termo(n))