def torre_de_hanoi(n, origem, destino, auxiliar):
    if n == 1:
        print("Mover disco 1 de", origem, "para", destino) #primeiro caso de recursão
        return
    torre_de_hanoi(n-1, origem, auxiliar, destino) #chamada recursiva
    print("Mover disco", n, "de", origem, "para", destino) #caso geral
    torre_de_hanoi(n-1, auxiliar, destino, origem) #chamada recursiva
torre_de_hanoi(4, 'A', 'B', 'C')
