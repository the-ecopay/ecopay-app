import axios from "axios";
import API_BASE_URL from "./config";


export const detectImage = async (images)=>{
    try {
        const formData= new FormData()
        images.forEach((imageUri, index) => {
            const fileName = imageUri.split('/').pop();
            const match = /\.(\w+)$/.exec(fileName);
            const type = match ? `image/${match[1]}` : `image`;
            
            formData.append('images', {
              uri: imageUri,
              name: fileName,
              type: type,
            });
        });

      console.log(formData)

        const response = await axios.post(`${API_BASE_URL}/recognize-images/`, formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        return response.data
      } catch (error) {
        console.error('Image Detect Error: ', error);
        throw error;
      }
};