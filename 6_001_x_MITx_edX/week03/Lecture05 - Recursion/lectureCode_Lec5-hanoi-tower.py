def printMove(fr, to):
    print('move from ' + str(fr) + ' to ' + str(to))

def Towers(n, fr, to, spare):
    if n == 1:
        printMove(fr, to)
    else:
        # 1. muovo tutti i dischi tranne uno nella colonna 'spare' (non-target)
        #    risolvi un problema piu facile
        print("1")
        Towers(n-1, fr, spare, to)
        # 2. muovo il disco rimanente (quello piu grosso che fa da fondo)
        #    dalla colonna in cui si trova a quella target
        #    risolvi il problema piu facile
        print("2")
        Towers(1, fr, to, spare)
        # 3. muovo tutti i dischi tranne uno precedentemente messi nella colonna non-target
        #    sulla colonna target
        #    risolvi un problema piu facile
        print("3")
        Towers(n-1, spare, to, fr)

# sposta 4 dischi dal centro alla colonna di sx
Towers(3, 'mid', 'sx', 'dx')