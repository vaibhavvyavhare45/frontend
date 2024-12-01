import { Avatar, Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-3 bg-[#e91e63] lg:px-20 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="list-none logo font-semibold text-gray-300 text-2xl">
          Vaibhtz Food
        </li>
      </div>

      {/* Right Section: Search and Other Items */}
      <div className="flex items-center space-x-4 lg:space-x-10">
        {/* Search Icon */}
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: '1.5rem'}} />
          </IconButton>
        </div>

        {/* Placeholder for Additional Items */}
        <div>
            <Avatar sx={{bgcolor:"white",color:pink.A400}}>C</Avatar>
         
        </div>
        <div>
          <IconButton>
            <Badge color="primary " badgeContent={3}>
            <ShoppingCartIcon sx={{ fontSize: '1.5rem'}} />
            </Badge>
         
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
