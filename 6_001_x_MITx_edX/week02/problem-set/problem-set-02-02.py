__author__ = 'simo'


### Problem 01
balance = 4213.00
#balance = 4842.00

annualInterestRate = 0.2
monthlyPaymentRate = 0.04

totalPayment = 0

for month in range(12):
    print("Month: " + str(month + 1))
    monthlyPayment = balance * monthlyPaymentRate
    totalPayment += monthlyPayment
    monthlyInterestRate = annualInterestRate / 12.0
    print("Minimum monthly payment: " + str(round(monthlyPayment, 2)))
    monthlyUnpaidBalance = balance - monthlyPayment
    balance = monthlyUnpaidBalance + (monthlyInterestRate * monthlyUnpaidBalance)
    print("Remaining balance: " + str(round(balance, 2)))

print("Total paid: " + str(round(totalPayment, 2)))
print("Remaining balance: " + str(round(balance, 2)))
