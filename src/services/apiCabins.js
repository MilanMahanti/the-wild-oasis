import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins data can't be loaded!");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);
  const fileName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin_images/${fileName}`;

  let query = supabase.from("cabins");
  //create new cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]).select();
  }
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.log(error);
    throw new Error("Cabins  can't be created!");
  }

  if (hasImage) return data;
  //upload image
  const { error: storageError } = await supabase.storage
    .from("cabin_images")
    .upload(fileName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabins image can't be uploaded.");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins data can't be deleted.");
  }
  return data;
}
