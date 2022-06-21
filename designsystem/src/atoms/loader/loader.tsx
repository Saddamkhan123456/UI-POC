import { PulseLoader, FadeLoader } from "react-spinners";
export interface LoaderProps {
	variant?: any;
	type: "circular" | "linear" | "pulse";
	color?: string;
	size?: any;
	loading: boolean;
}

export const Loader = ({
	variant = 'primary',
	type = 'circular',
	color = '#36797F',
	size = 5,
	loading = true,
}: LoaderProps) => {
	return (
		<>
			{(type === "circular") &&
				<div className="fade-circle-loader">
					<FadeLoader speedMultiplier={1} color={color} loading={loading} height={5} width={5} radius={23} margin={5} />
				</div>
			}
			{(type === "pulse") &&
				<div className="pulse-loader">
					<PulseLoader
						// css={override}
						size={size}
						color={color}
						loading={loading}
						/>
				</div>
			}
			{(type === "linear") &&
				<div className={`animate-pulse w-full h-full bg-theme-${variant}`}>
					<div className='loading h-full'></div>
				</div>
			}
		</>
	)
}
