import { useEffect, useState } from "react";
import { assets } from "../../assets/admin_assets/admin_assets/assets";
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "", // Changed to match backend schema
    price: "",
    category: "Salad"
  });

  // Handler for form input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description); // Changed to match backend schema
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        // Reset form fields
        setData({
          name: "",
          description: "", // Changed to match backend schema
          price: "",
          category: "Salad"
        });
        setImage(null); // Set to null to clear image preview
        toast.success(response.data.message);
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="Add">
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
              className="preview-image"
            />
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <div className="add-product-description">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description} // Changed to match backend schema
            name="description" // Changed to match backend schema
            rows="6"
            placeholder="Write content here"
          />
        </div>

        <div className="Add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
