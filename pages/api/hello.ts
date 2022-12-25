import { type NextApiRequest, type NextApiResponse } from "next";

interface Data {
  message: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({
    message: "hello",
  });
};

export default handler;
