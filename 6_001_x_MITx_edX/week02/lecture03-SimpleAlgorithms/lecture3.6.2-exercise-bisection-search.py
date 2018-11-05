# segret_guess = 42
low = 0
high = 100
guess = 50

print("Please think of a number between 0 and 100!")
print("Is your secret number 50?")
answer = str(raw_input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate \
                    the guess is too low. Enter 'c' to indicate I guessed correctly."))

while (answer != 'h' and answer != 'l' and answer != 'c'):
    answer = str(raw_input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate \
                    the guess is too low. Enter 'c' to indicate I guessed correctly."))

while (answer != 'c'):
    if answer == 'l':
        low = guess
    elif answer == 'h':
        high = guess
    else:
        print("Sorry, I did not understand your input.")

    guess = (high + low) / 2
    print("Is your secret number " + str(guess) + "?")
    answer = str(raw_input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate \
                    the guess is too low. Enter 'c' to indicate I guessed correctly."))

print("Game over. Your secret number was: " + str(guess))
