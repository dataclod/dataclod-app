import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function Database() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center h-14 border-b px-4 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">
        <img
          alt="Logo"
          className="rounded-full"
          height="32"
          src="/placeholder.svg"
          style={{
            aspectRatio: "32/32",
            objectFit: "cover",
          }}
          width="32"
        />
        <h1 className="ml-2 font-semibold">Database</h1>
        <Button className="ml-auto w-8 h-8" size="icon" variant="ghost">
          <ChevronDownIcon className="h-4 w-4" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </header>
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col w-full gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-[250px_1fr]">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Settings</h2>
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Label className="w-[80px]" htmlFor="host">
                    Host
                  </Label>
                  <Input id="host" placeholder="Enter host" />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-[80px]" htmlFor="port">
                    Port
                  </Label>
                  <Input id="port" placeholder="Enter port" type="number" />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-[80px]" htmlFor="username">
                    Username
                  </Label>
                  <Input id="username" placeholder="Enter username" />
                </div>
                <div className="flex items-center gap-2">
                  <Label className="w-[80px]" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Enter password"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">SQL Editor</h2>
                <Textarea
                  className="min-h-[100px] w-full text-sm"
                  placeholder="Enter SQL query"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button>Run Query</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold">Results</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>City</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>New York</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">2</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>San Francisco</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">3</TableCell>
                    <TableCell>Mike Johnson</TableCell>
                    <TableCell>25</TableCell>
                    <TableCell>Chicago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">4</TableCell>
                    <TableCell>Sara Clark</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>Los Angeles</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">5</TableCell>
                    <TableCell>Kevin Lee</TableCell>
                    <TableCell>29</TableCell>
                    <TableCell>Miami</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button className="rounded-full" size="icon" variant="outline">
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <p className="flex h-8 items-center justify-center w-12 rounded-md border dark:border-gray-700">
                1
              </p>
              <Button className="rounded-full" size="icon" variant="outline">
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
