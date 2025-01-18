var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import ImageSlider from '@/components/ImageSlider';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ProductReel from '@/components/ProductReel';
import { PRODUCT_CATEGORIES } from '@/config';
import { getPayloadClient } from '@/get-payload';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import React from 'react';
import StyledProductDescription from '@/components/ui/styledPD';
import ElegantBreadcrumbs from '@/components/ElegantBreadcrums';
import ContentContextButton from '@/components/ContentContextButton';
// this is to get product access from backend reyy 
var Page = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var productId, payload, products, product, label, validUrls;
    var _c;
    var params = _b.params;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                productId = params.productId;
                return [4 /*yield*/, getPayloadClient()];
            case 1:
                payload = _d.sent();
                return [4 /*yield*/, payload.find({
                        collection: 'products',
                        limit: 1,
                        where: {
                            id: {
                                equals: productId,
                            },
                            approvedForSale: {
                                equals: 'approved',
                            },
                        },
                    })];
            case 2:
                products = (_d.sent()).docs;
                product = products[0];
                // Add these debug logs
                console.log('Product:', product);
                console.log('Description HTML:', product === null || product === void 0 ? void 0 : product.description_html);
                console.log('Type of description:', typeof (product === null || product === void 0 ? void 0 : product.description_html));
                if (!product)
                    return [2 /*return*/, notFound()];
                label = (_c = PRODUCT_CATEGORIES.find(function (_a) {
                    var value = _a.value;
                    return value === product.category;
                })) === null || _c === void 0 ? void 0 : _c.label;
                validUrls = product.images.map(function (_a) {
                    var image = _a.image;
                    return typeof image === 'string' ? image : image.url;
                })
                    .filter(Boolean);
                return [2 /*return*/, (<MaxWidthWrapper className='bg-transparent'>
        <div className='bg-transparent'>
          {/* Navigation Container */}
          <div className="flex justify-between items-center">
            {/* Left side - Breadcrumbs */}
            <div className="flex-1">
              <ElegantBreadcrumbs />
            </div>
            
            {/* Right side - Content Context */}
            <div className="flex-1 mt-8 mb-8">
            <ContentContextButton name={product.name} category={product.category} author={product.author} themes={product.themes} excerpt={product.excerpt} context={product.context} publishedDate={product.publishedDate} product={product} descriptionWordCount={product.descriptionWordCount || 0}/>
            </div>
          </div>

      {/* Product Image */}
      <div className='mt-4 max-w-xl'>
          <ImageSlider urls={validUrls}/>
        </div>

        {/* Product Details */}
        <div className='mt-4'>
          <h1 className='text-2xl font-serif font-bold text-grey-400'>
            {product.name}
          </h1>





        {/* Category */}
        <div className='mt-4 flex items-center'>
          <p className='font-medium text-gray-900'>
            <span className="text-muted-foreground">Category</span>
          </p>
          <div className='ml-4 border-l font-medium text-muted-foreground text-gray-900 pl-4'>
            {label}
          </div>
        </div>

        {/* Product Description */}
        <div className='mt-4 space-y-6'>
        <StyledProductDescription descriptionHtml={(product.description_html && typeof product.description_html === 'string')
                            ? product.description_html
                            : ''}/>
        </div>

        {/* Author and Add to Cart Button */}
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <div className="group relative">
              <span className='text-sm text-muted-foreground'>
                © {product.author}
              </span>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Copyright Content
              </span>
            </div>
            <AddToCartButton 
                    //@ts-ignore
                    product={product}/>
          </div>
        </div>
      </div>

    </div>

    {/* Similar Products */}
    <ProductReel href='/products' query={{ category: product.category, limit: 4,
                            excludeId: productId, }} title={"Similar ".concat(label)} subtitle={"Browse similar contents like '".concat(product.name, "'")} // {{ edit_2 }}
                     showSorting={false}/>
  {/* </div> */}
                    </MaxWidthWrapper>)];
        }
    });
}); };
export default Page;
