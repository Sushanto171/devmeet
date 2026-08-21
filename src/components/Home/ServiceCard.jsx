
import { Button } from "@/components/ui/button";

const ServiceCard = ({ image, service, description }) => {
    return (
        <div className="p-4 rounded-lg shadow-md border border-gray-200 bg-white flex flex-col h-full">

            {/* Service Image */}
            <div className="w-full h-48 mb-4">
                {image ? (
                    <img
                        src={image}
                        alt={service || "Service"}
                        className="w-full h-full object-cover rounded-lg"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        Placeholder Image
                    </div>
                )}
            </div>

            {/* Service Name */}
            <h3 className="text-lg font-semibold">
                {service || "Placeholder Service"}
            </h3>

            {/* Service Description */}
            <p className="text-gray-600 mt-2 mb-5">
                {description || "Placeholder description for this service."}
            </p>

            {/* Read More */}
            <div className="mt-auto">
                <Button>
                    Read More
                </Button>
            </div>
        </div>
    );
};

export default ServiceCard;

