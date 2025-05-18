import { Button } from "../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Trash2 } from "lucide-react";
import { IMAGE_BASE_URL } from "../../../utils/constants";

function CartTable(props) {
  const { carts, delete_cart_items } = props;
  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-400 text-center hover:bg-blue-400">
            <TableHead className="w-[100px] text-white text-center border-r border-gray-300">
              Remove
            </TableHead>
            <TableHead className="text-white text-center border-r border-gray-300">
              Image
            </TableHead>
            <TableHead className="text-white text-center border-r border-gray-300">
              Product Name
            </TableHead>
            <TableHead className="text-white text-center border-r border-gray-300">
              Quantity
            </TableHead>
            <TableHead className="text-white text-center">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carts?.map((master) => (
            <TableRow className="text-center" key={master.id}>
              <TableCell className="border-r border-gray-300">
                <Button
                  variant="outline"
                  onClick={() => delete_cart_items(master.cart_id)}
                  size="icon"
                  className="hover:bg-red-500 hover:text-white hover:border-red-500 rounded-full"
                >
                  <Trash2 />
                </Button>
              </TableCell>
              <TableCell className="border-r border-gray-300">
                <img
                  className="h-20 w-20 rounded-sm mx-auto"
                  src={IMAGE_BASE_URL + master.thumbnail}
                  alt=""
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell className="border-r border-gray-300">
                <span>{master.product_name}</span>
              </TableCell>
              <TableCell className="border-r border-gray-300">
                <span>1</span>
              </TableCell>
              <TableCell>
                <span>₹{master.price}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CartTable;
