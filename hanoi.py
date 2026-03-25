def torre_de_hanoi(n, origem, destino, auxiliar):
    if n == 1:
        print("Mover disco 1 de", origem, "para", destino)
        return
    torre_de_hanoi(n-1, origem, auxiliar, destino)
    print("Mover disco", n, "de", origem, "para", destino)
    torre_de_hanoi(n-1, auxiliar, destino, origem)

torre_de_hanoi(3, 'A', 'B', 'C')
