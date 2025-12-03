import Replicate from "replicate";

export const runtime = "edge";

export async function POST(req) {
  const form = await req.formData();
  const image = form.get("image");

  const replicate = new Replicate({ token: process.env.REPLICATE_API_TOKEN });

  const output = await replicate.run(
    "black-forest-labs/flux-schnell:latest",
    {
      input: {
        prompt: "police officer speaking with civilians, same uniform, same face, realistic scene",
        image,
      },
    }
  );

  return Response.json({ output });
}
