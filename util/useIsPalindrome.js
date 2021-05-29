export function useIsPalindrome(head)
{
    let input = head
    let res = false

    for (let i = 0; i < input.length; i++){
          if(input.length > 1){
          let first = input.shift()
          let last = input.pop()
          first === last ? res = true : res = false
          }            
        }          
        return res
    }

  //  console.log(isPalindrome([1,2,1,2,1]))