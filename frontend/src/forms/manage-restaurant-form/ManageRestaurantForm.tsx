import { z } from "zod";

const formSchema = z.object({
    restaurantName : z.string({
        required_error : "Restaurant name is required"
    }),
    city : z.string({
        required_error : "City is required"
    }),
    country : z.string({
        required_error : "Country is required"
    }),
    deliveryPrice : z.coerce.number({
        required_error : "Deliver price is required ",
        invalid_type_error : "Must be a valid number"
    }),
    estimatedDeliveryTime : z.coerce.number({
        required_error : "Estimated Delivery Time is required ",
        invalid_type_error : "Must be a valid number"
    }),
    cuisines : z.array(z.string()).nonempty({
        message : "Please select atleast one item"
    }),
    menuItems: z.array(z.object({
        name : z.string().min(1,"name is required"),
        price : z.coerce.number().min(1, "Price is required")
    })),
    imageFile:z.instanceof(File ,{message : "Image is required"})
})

type restaurantFormData = z.infer<typeof formSchema>

type Props = {
  onSave : (restaurantFormData : FormData)=> void;
  isLoading : boolean;
}

const ManageRestaurantForm = ({onSave , isLoading}: Props) => {
  
}

export default ManageRestaurantForm;