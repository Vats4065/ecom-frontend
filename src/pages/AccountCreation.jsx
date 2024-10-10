import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const AccountCreation = ({ onBack, onComplete }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryCode: "254",
    phoneNumber: "",
    location: "",
    email: "",
    mtaa: "",
    password: "",
    username: "",
    confirmPassword: "",
    businessName: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const kenyaCounties = [
    "Mombasa",
    "Kwale",
    "Kilifi",
    "Tana River",
    "Lamu",
    "Taita-Taveta",
    "Garissa",
    "Wajir",
    "Mandera",
    "Marsabit",
    "Isiolo",
    "Meru",
    "Tharaka-Nithi",
    "Embu",
    "Kitui",
    "Machakos",
    "Makueni",
    "Nyandarua",
    "Nyeri",
    "Kirinyaga",
    "Murang'a",
    "Kiambu",
    "Turkana",
    "West Pokot",
    "Samburu",
    "Trans-Nzoia",
    "Uasin Gishu",
    "Elgeyo-Marakwet",
    "Nandi",
    "Baringo",
    "Laikipia",
    "Nakuru",
    "Narok",
    "Kajiado",
    "Kericho",
    "Bomet",
    "Kakamega",
    "Vihiga",
    "Bungoma",
    "Busia",
    "Siaya",
    "Kisumu",
    "Homa Bay",
    "Migori",
    "Kisii",
    "Nyamira",
    "Nairobi",
  ];

  const ugandaDistricts = [
    "Abim",
    "Adjumani",
    "Agago",
    "Alebtong",
    "Amolatar",
    "Amudat",
    "Amuria",
    "Amuru",
    "Apac",
    "Arua",
    "Budaka",
    "Bududa",
    "Bugiri",
    "Buhweju",
    "Buikwe",
    "Bukedea",
    "Bukomansimbi",
    "Bukwa",
    "Bulambuli",
    "Buliisa",
    "Bundibugyo",
    "Bushenyi",
    "Busia",
    "Butaleja",
    "Butambala",
    "Buvuma",
    "Buyende",
    "Dokolo",
    "Gomba",
    "Gulu",
    "Hoima",
    "Ibanda",
    "Iganga",
    "Isingiro",
    "Jinja",
    "Kaabong",
    "Kabale",
    "Kabarole",
    "Kaberamaido",
    "Kalangala",
    "Kaliro",
    "Kalungu",
    "Kampala",
    "Kamuli",
    "Kamwenge",
    "Kanungu",
    "Kapchorwa",
    "Kasese",
    "Katakwi",
    "Kayunga",
    "Kibaale",
    "Kiboga",
    "Kibuku",
    "Kiruhura",
    "Kiryandongo",
    "Kisoro",
    "Kitgum",
    "Koboko",
    "Kole",
    "Kotido",
    "Kumi",
    "Kween",
    "Kyankwanzi",
    "Kyegegwa",
    "Kyenjojo",
    "Lamwo",
    "Lira",
    "Luuka",
    "Luwero",
    "Lwengo",
    "Lyantonde",
    "Manafwa",
    "Maracha",
    "Masaka",
    "Masindi",
    "Mayuge",
    "Mbale",
    "Mbarara",
    "Mitooma",
    "Mityana",
    "Moroto",
    "Moyo",
    "Mpigi",
    "Mubende",
    "Mukono",
    "Nakapiripirit",
    "Nakaseke",
    "Nakasongola",
    "Namayingo",
    "Namutumba",
    "Napak",
    "Nebbi",
    "Ngora",
    "Ntoroko",
    "Ntungamo",
    "Nwoya",
    "Otuke",
    "Oyam",
    "Pader",
    "Pallisa",
    "Rakai",
    "Rubirizi",
    "Rukungiri",
    "Sembabule",
    "Serere",
    "Sheema",
    "Sironko",
    "Soroti",
    "Tororo",
    "Wakiso",
    "Yumbe",
    "Zombo",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevState) => ({ ...prevState, [name]: "" }));
    }
    if (name === "countryCode") {
      setFormData((prevState) => ({ ...prevState, location: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Please write your first name.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please write your last name.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Please enter your phone number.";
    if (!formData.location.trim())
      newErrors.location = "Please choose your location.";
    if (!formData.email.trim())
      newErrors.email = "Please enter your email address.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.mtaa.trim())
      newErrors.mtaa = "Please enter your Mtaa or Village.";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";
    if (formData.username.length < 3 || formData.username.length > 20)
      newErrors.username = "Username must be between 3 and 20 characters long.";
    if (!/^[a-zA-Z0-9_]+$/.test(formData.username))
      newErrors.username =
        "Username can only contain letters, numbers, and underscores.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.businessName.trim())
      newErrors.businessName = "Please write your business name.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/onboarding/topic-selection");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...", formData);
      onComplete(formData);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow flex items-center justify-center mb-4">
        <Link
          to="/"
          className="flex items-center text-decoration-none text-dark"
        >
          <img
            src="/Images/LogoM.png"
            alt="MyGariApp Logo"
            className="logo-image"
          />
          <h1 className="text-2xl font-bold">MyGariApp</h1>
        </Link>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step 4 of 7</span>
          <span className="text-sm text-gray-500">57%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-600 h-full rounded-full"
            style={{ width: "57.14%" }}
          ></div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Begin Your Business Journey
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="countryCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country Code
              </label>
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="254">Kenya (+254)</option>
                <option value="256">Uganda (+256)</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm">
                  {errors.phoneNumber}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option value="">Select location</option>
                {formData.countryCode === "254"
                  ? kenyaCounties.map((county) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))
                  : ugandaDistricts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
              </select>
              {errors.location && (
                <span className="text-red-500 text-sm">{errors.location}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="mtaa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mtaa or Village
              </label>
              <input
                type="text"
                id="mtaa"
                name="mtaa"
                value={formData.mtaa}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.mtaa && (
                <span className="text-red-500 text-sm">{errors.mtaa}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {errors.businessName && (
              <span className="text-red-500 text-sm">
                {errors.businessName}
              </span>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 bg-white text-red-500 border border-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountCreation;
