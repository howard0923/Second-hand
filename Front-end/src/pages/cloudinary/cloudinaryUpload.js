import axios from '../../commons/axios';

export default function CloudinaryUpload (fileToUpload) {
    return axios.post("/api/cloudinaryUpload",fileToUpload).then(res => res.data)
                                                        .catch(err => console.log(err))
}
