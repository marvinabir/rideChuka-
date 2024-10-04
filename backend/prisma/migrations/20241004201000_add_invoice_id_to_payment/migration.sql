-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "invoiceId" TEXT,
ALTER COLUMN "status" DROP DEFAULT;
