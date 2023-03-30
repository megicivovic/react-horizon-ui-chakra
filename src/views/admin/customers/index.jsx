/* eslint-disable react-hooks/exhaustive-deps */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import ColumnsTable from "views/admin/customers/components/ColumnsTable";
import React, { useEffect, useState } from "react";
import AuthCustomer from "../../../api/customer";
import { useAuth } from "auth-context/auth.context";
import { columnsDataColumns } from "views/admin/customers/variables/columnsData";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const { user } = useAuth();

  useEffect(async () => {
    try {
      let response = await AuthCustomer.GetAll(user);
      return setCustomers(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <ColumnsTable columnsData={columnsDataColumns} customers={customers} />
      </SimpleGrid>
    </Box>
  );
}
