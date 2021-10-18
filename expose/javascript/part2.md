1. **3** : var is a global variable. So variable "i" is still defined outside of the loop

2. **150** : discounted will be re assigned when i = 2. So The latest discountedPrice is 300 * (1 - 0.5) = 150

3. **150** : Math.round return the value of a number rounded to the nearest integer. So 150 * 100 / 100 when i = 2

4. **[50,100,150]**  From for loop, it pushes finalPrice prices.length times to the array discounted. So It will return with the size of 3 

5. **Error** : Let is only defined inside of for loop only. Any variables defined by "let" won't be defined outside of the block

6. **Error** : discountedPrice is defined inside of for loop. Thus discountedPrice is defined by let, it won't be defined outside of the for loop

7. **150** : Since the finalPrice is defined beginning of the function, finalPrice is in the same box and it would be printed as expected. 

8. **[50,100,150]** : Since discounted is defined inside of the function and return discounted inside of the function, it is in the same box. So it will return array with size of 3

9. **Error** : Since "i" is defined inside of the for loop by "let", it won't be defined outside of the loop. Thus, It causes the error

10. **3** : Length is defined in the function and won't attemp to re-assign length. So it will prints out 3

11. **[50,100,150]** : Since discounted is defined by const, we can change the value, but we can not re assign it. So It will print out [50,100,150]

12. A: student.name
    B: student["Grad Year"]
    C: student.greeting()
    D: student["Favorite Teacher"].name
    E: student.courseLoad[0]

13. A:32
    B:1
    C:3
    D:3null
    E:4
    F:0
    G:3undefined
    H:NaN

14. A:true
    B:false
    C:true
    D:false
    E:false
    F:true

15. == checks equality regardless their datatype while === checks equality with their data types as well. 

16.  **Answer is in part2-question16.js**

17. **[2,4,6]** : For loop has 3 iterations and each iteration get an element from [1,2,3] and multiply by 2 and then push it to the new array. and then the function returns the new array. Thus, it should be [2,4,6]

18. *** answer  in part2-question18.js ***

19. **1 4 3 2**: The execution depens on the number of waiting tasks in the queue. The computer reads the code and once the computer finds setTimeout, then the computer pushes this command to the queue. Thus, 1 4 3 2 would be printed.  

