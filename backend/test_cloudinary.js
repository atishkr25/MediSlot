import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: "dummy_name",
    api_key: "dummy_key",
    api_secret: "dummy_secret"
});

console.log("Configured");
