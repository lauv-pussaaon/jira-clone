import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";

export const SignUpCard = () => {	
	return (
		<Card className="w-full h-full md:w-[487px] border-none shadow-none">
			<CardHeader className="flex items-center justify-center text-center p-7">
				<CardTitle className="text-2xl">
					Sign Up
				</CardTitle>
				<CardDescription>
					By signing up, you agree to our 
					<Link href="/terms">Terms of Service</Link>
					{" and "}
					<Link href="/privacy">
						<span className="text-blue-700">Privacy Policy</span>
					</Link>
				</CardDescription>
			</CardHeader>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7">
				<form className="space-y-4">
					<Input
						required
						type="text"
						value={""}
						onChange={() => {}}
						placeholder="Enter your name"
						disabled={false}
					/>
					<Input
						required
						type="email"
						value={""}
						onChange={() => {}}
						placeholder="Enter email address"
						disabled={false}
					/>
					<Input
						required
						type="password"
						value={""}
						onChange={() => {}}
						placeholder="Enter password"
						disabled={false}
						min={8}
						max={256}
					/>
					<Button
						className="w-full"
						disabled={false}
						size="lg"
					>
						Sign in
					</Button>
				</form>
			</CardContent>
			<div className="px-7">
				<DottedSeparator />
			</div>
			<CardContent className="p-7 flex flex-col gap-y-4">
				<Button
					className="w-full"
					disabled={false}					
					size="lg"
					variant="secondary"
				>
					<FcGoogle className="mr-2 size-5"/>
					Login with Google
				</Button>
				<Button
					className="w-full"
					disabled={false}					
					size="lg"
					variant="secondary"
				>
					<FaGithub className="mr-2 size-5" />
					Login with Github
				</Button>
			</CardContent>
		</Card>
	);
}