
import { logOut, setCredetial, userDetail } from "./authSlice";
import { expandedSlice } from "./expandedSlice";
import { productSlice } from "./productSlice";

export const authAddaptor = productSlice.injectEndpoints({
    endpoints:builder=>({
        postRegister:builder.mutation({
            query:credintials=>({
                url:'register',
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json' },
                body:{...credintials}
            }),
               transformErrorResponse:response=>response.data ,
        }) ,
        login : builder.mutation({
          query: loginData =>({
           url:'login',
           method:'POST',
           headers:{
            Accept:'application/json',
            'Content-Type': 'application/json' },
           body:{...loginData}  
          }),
          async onQueryStarted(arg,{dispatch ,queryFulfilled}){
              dispatch(setCredetial({accessToken:null}))
              try{
                  
                const {data} =
                await queryFulfilled
                
                const {accessToken} = await data
                if(data?.accessToken){
                    dispatch(setCredetial({accessToken}))
                    setTimeout(()=>{
                        expandedSlice.util.resetApiState()
                    },1000)
                }
           }catch(err){
            console.log(err)
        }

          },
            transformErrorResponse:response=>response.data 
        }),
        getUser:builder.query({
            query:()=>({
                url:'getUser',
                method:"GET",
            }),
           async onQueryStarted(arg,{dispatch,queryFulfilled}){
              try{
                  const {data} = await queryFulfilled
                  if(data){
                      dispatch(userDetail({...data}))
                    }else{
                        dispatch(userDetail({user:{}}))
                    }
                }catch(err){ console.log(err) }
            },
            transformErrorResponse:response=>response.data
        }),
        updatePassword:builder.mutation({
          query:(user)=>({
             url:'updateUser',
           method:'PATCH',
           body:{...user}
          })  
        }), 
        razorPay:builder.mutation({
         
         query:(amount)=>({
              
             url:'paymentCheckout',
             method:'POST',
             body:amount

         })

        }),
        postOrder:builder.mutation({
        query:(data)=>({
            url:'order',
            method:'POST',
            body:{...data}
        })
        }),
        userLogout:builder.mutation({
            query:()=>({
                url:'logout',
                method:'POST'
            }),
            async onQueryStarted(arg, {dispatch , queryFulfilled}){
            try{
                await queryFulfilled
                dispatch(logOut())
                dispatch(userDetail({}))
                setTimeout(()=>{
                    dispatch(productSlice.util.resetApiState())
                },1000)
            }catch(error){
                 console.log(error)
            }
        }
    }) ,
    deleteUser:builder.mutation({
        query:id=>({
            url:'deleteuser',
            method:'DELETE',
            body:{id}
        }),
        async onQueryStarted(arg,{dispatch, queryFulfilled}){
            await queryFulfilled
            dispatch(logOut())
            setTimeout(()=>{
                dispatch(productSlice.util.resetApiState())
            },1000)
        }
    })


    })
})
  
export const {usePostRegisterMutation ,
                 useRazorPayMutation ,
                   useLoginMutation ,
                    useGetUserQuery,
                    usePostOrderMutation,
                    useUpdatePasswordMutation,
                   useDeleteUserMutation ,
                 useUserLogoutMutation } = authAddaptor



