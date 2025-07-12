import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/ProductAction";

// Font Awesome Icons
import {
  FaPlusCircle,
  FaImage,
  FaTag,
  FaRupeeSign,
  FaClipboardList,
  FaIndustry,
  FaCubes,
  FaPalette,
  FaPercent,
  FaAlignLeft,
} from "react-icons/fa";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const CreateProductHandler = (CreatedProduct) => {
    CreatedProduct.id = nanoid();
    dispatch(asyncCreateProduct(CreatedProduct));
    reset();
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <FaPlusCircle className="text-amber-500" />
        Create New Product
      </h2>

      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image URL */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaImage className="text-amber-500" />
            Image URL
          </label>
          <input
            type="url"
            {...register("image")}
            placeholder="Product image URL"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Product Name */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaTag className="text-amber-500" />
            Product Name
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Product title"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Price */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaRupeeSign className="text-amber-500" />
            Price
          </label>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            placeholder="0.00"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Category */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaClipboardList className="text-amber-500" />
            Category
          </label>
          <input
            type="text"
            {...register("category")}
            placeholder="e.g. women's clothing"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Brand */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaIndustry className="text-amber-500" />
            Brand
          </label>
          <input
            type="text"
            {...register("brand")}
            placeholder="Generic Brand"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Model */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaCubes className="text-amber-500" />
            Model
          </label>
          <input
            type="text"
            {...register("model")}
            placeholder="2024 Edition"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Color */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaPalette className="text-amber-500" />
            Color
          </label>
          <input
            type="text"
            {...register("color")}
            placeholder="Assorted Colors"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Discount */}
        <div className="p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaPercent className="text-amber-500" />
            Discount
          </label>
          <input
            type="text"
            {...register("discount")}
            placeholder="e.g. 10%"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 p-4 rounded-xl shadow-inner">
          <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
            <FaAlignLeft className="text-amber-500" />
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Enter product description..."
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none resize-none min-h-[120px] placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-amber-50 border-2 border-amber-100 text-teal-500 py-3 px-6 rounded-xl hover:shadow-2xl transition duration-300 font-semibold flex justify-center items-center gap-2">
            <FaPlusCircle className="text-teal-500" />
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
