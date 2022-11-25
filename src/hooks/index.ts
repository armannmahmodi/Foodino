import { useMutation, useQuery } from '@tanstack/react-query';
import * as api from '~/api';


const useFoodCategory = () => {
    const query = useQuery(['food_grouping'], () => api.getFoodCategory())
    return query;
}

// const useAllFoodList = () => {
//     const query = useQuery(['food_list'], () => api.getAllFoodList())
//     return query;
// }

const useFoodList = (subset: any) => {
    const query = useQuery(['food_list', subset], async => { return api.getFoodList(subset) })
    return query;
}
// const usePostFoodCart = (item:any) => {
//     const query = useQuery(['food_cart',item], () => api.postFoodCart(item))
//     return query;
// }
const usePostFoodCart = () => {
    return useMutation(item => {
        return api.postFoodCart(item)
    })

}


const updateFoodList = () => {
    return useMutation( data=> {
        return api.updateFoodList()
    })
   

}

// export const useUpdateProfile = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//       async ({input}: {input: any}) => {
//         return graphQLClient.request(UPDATE_PROFILE, {
//           input,
//         });
//       },
//       {
//         onSuccess(data) {
//           if (data?.user_updateSuperAdminProfile?.status?.code === 1) {
//             queryClient.invalidateQueries([queryKeys.getSuperAdminUser]);
//           }
//         },
//       },
//     );
//   };


export {
    useFoodCategory,
    useFoodList,
    updateFoodList,
    usePostFoodCart
    
};
