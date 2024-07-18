"use client";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useCallback,
  useEffect,
  useState,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";

export default function Golfclubs({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [golfclubs, setGolfClubs] = useState<any>([]);
  const allClubs: { name: any }[] = [];
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      
      const { data, error, status } = await supabase
        .from("sticks")
        .select()
        .eq("userid", user?.identities[0].identity_id)

      if (error && status !== 406) {

        console.log(error);
        throw error;
      }

      if (data) {
        const allGolfclubs = [];
        data.forEach((item) => {
          allGolfclubs.push(item);
          setGolfClubs((golfclubs: any) => [item, ...golfclubs]);
        });
        setLoading(false);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="rounded-[10px] drop-shadow-sm px-6 py-6 bg-white/50 max-h-[250px] overflow-y-scroll">
      {!loading ? (
        <Table removeWrapper selectionMode="single" isHeaderSticky>
          <TableHeader>
            <TableColumn className="uppercase">Golfclubs</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"Golfclubs werden geladen.."} className="">
            {golfclubs.map(function (data: { name: string }, index:any) {
              return (
                <TableRow key={index}>
                  <TableCell>{data.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className="grid items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}
