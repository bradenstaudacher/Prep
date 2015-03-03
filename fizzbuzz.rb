def fizzbuzz(startnum, endnum)
  i = startnum-1 # intitialize i as our number to print based on startnum arg
  while i < endnum # while our number is less than endnum we need to keep printing
   i = i+1 # first take our value and add 1 so we make progress toward endnum
   if i % 15 == 0 # check if i has 3 and 5 as divisors, if true print out "FizzBuzz"
     puts "FizzBuzz"
   elsif i % 5 == 0 # check if i has 5 as a divisor, if true print out "Buzz"
     puts "Buzz"
   elsif i % 3 == 0 # check if i has 3 as a divisor, if true print out "Fizz"
     puts "Fizz"
   else
     puts "#{i}" # if none of the above happen, print out i
   end
  end
end

fizzbuzz(1,20)