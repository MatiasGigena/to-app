import { NextResponse } from "next/server";
import { handleApi } from "../controller/searchByname";
export async function GET(request) {
  const search = request.nextUrl.searchParams.get("search"); //Forma de buscar por query
  try {
    const response = await handleApi(search);
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
