import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/lib/prismadb'
import serverAuth from "@/lib/serverAuth";
export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    
}