def non_duplicated_values(values)
  print values.find_all {
    |val| values.count(val) < 2
    }
    
end

test1 = [1,2,3,4,4,4,5,6,6,6,6]
non_duplicated_values(test1)