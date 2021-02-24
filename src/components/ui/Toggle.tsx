import { useTheme } from 'next-themes';
export default function Toggle(props) {
    const { onClick, active, text } = props;
    const { theme, setTheme } = useTheme();
    const styles = {
        background: {
            active:
                'bg-primary-main relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            inactive:
                'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        },
        toggle: {
            active:
                'translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
            inactive:
                'translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
        },
    };
    return (
        <div className="flex items-center">
            <button
                type="button"
                className={
                    active
                        ? styles.background.active
                        : styles.background.inactive
                }
                aria-pressed="false"
                aria-labelledby="annual-billing-label"
                onClick={onClick}
            >
                <span
                    aria-hidden="true"
                    className={
                        active ? styles.toggle.active : styles.toggle.inactive
                    }
                ></span>
            </button>
            <span className="ml-3" id="annual-billing-label">
                <span className="text-sm font-medium">{text}</span>
            </span>
        </div>
    );
}
