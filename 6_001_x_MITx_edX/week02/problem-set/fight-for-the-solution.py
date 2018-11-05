# this code is the code for the solution of week 02
# problem set 2.2 e 2.3

print("fight for the solution")

# case 01
balance = 5000
annualInterestRate = 0.18
min_interest = 0.02
# case 02
balance = 4213
annualInterestRate = 0.2
min_interest = 0.04
# case 03
balance = 3329  # solution 310
annualInterestRate = 0.2
# case 04
balance = 4773  # solution 440
annualInterestRate = 0.2
# case 05
balance = 320000  # solution 29157.09 (incremnting by 100 gives 29210)
annualInterestRate = 0.2

month_interest = annualInterestRate / 12.0

default_balance = balance
total_interst_paid = 0

low = balance / 12
high = (balance * (1 + (annualInterestRate / 12)) ** 12) / 12
guess = (high + low) / 2.0
safe = 0
print("guess: " + str(guess))

while True:

    guess = (high + low) / 2.0
    balance = default_balance
    annual_paid = 0
    total_interst_paid = 0

    for month in range(12):
        # min_month_pay       = balance * min_interest
        # balance            -= min_month_pay

        balance -= guess
        annual_paid += guess
        month_interst_paid = balance * month_interest
        total_interst_paid += month_interst_paid
        balance += month_interst_paid
    # print("### Month: " + str(month+1))
    # print("remaining: " + str(balance-annual_paid))
    # print("min_month_pay: " + str(min_month_pay))
    # print("month_interst_paid: " + str(month_interst_paid))


    #guess += 10


    if (high - low) < 0.01:
    # if (default_balance+total_interst_paid)-(guess*12) >= 0.01:
        print("###solution###" + str(guess))
        break
    elif balance < 0:
        print("+++")
        high = guess
    else:
        print("---")
        low = guess

    # print("high: " + str(high)+ " - low: " + str(low))
    print("guess: " + str(guess))  # solution: 29157
    safe += 1
    if safe == 1000:
        break

# print(" ")
# print("safe: " +str(safe))

# print("### solution:")
print("Lowest Payment: " + str(round(guess, 2)))
# print("expected 29157.09")
# print("remaining: " + str(balance))




