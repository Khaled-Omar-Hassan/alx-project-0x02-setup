import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
    return (
        <button className={`bg-[#A5B7F5] ${size} ${shape} text-white px-4 py-2 rounded`}>
            Button
        </button>
    );
};

export default Button;