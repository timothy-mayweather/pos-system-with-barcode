<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleReturnDetailsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('sale_return_details', function(Blueprint $table)
		{

			$table->integer('id', true);
			$table->integer('sale_return_id')->index('return_id');
			$table->integer('product_id')->index('product_id_details_returns');
			$table->float('price', 10, 0);
			$table->float('TaxNet', 10, 0)->nullable()->default(0);
			$table->string('tax_method', 192)->nullable()->default('1');
			$table->float('discount', 10, 0)->nullable()->default(0);
			$table->string('discount_method', 192)->nullable()->default('1');
			$table->integer('product_variant_id')->nullable()->index('sale_return_id_product_variant_id');
			$table->float('quantity', 10, 0);
			$table->float('total', 10, 0);
			$table->timestamps(6);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('sale_return_details');
	}

}
